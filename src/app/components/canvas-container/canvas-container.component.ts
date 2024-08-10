import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { albumData } from 'src/assets/songlist';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';

@Component({
  selector: 'app-canvas-container',
  standalone: true,
  imports: [],
  templateUrl: './canvas-container.component.html',
  styleUrls: ['./canvas-container.component.scss']
})
export class CanvasContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private loader!: GLTFLoader;
  private model?: THREE.Object3D;
  private planeGroup?: THREE.Group;
  private textures: THREE.Texture[] = [];
  @Input() albumIndex: number = 0; // Input property for albumIndex
  private albumCollection: AlbumCollection = albumData;

  ngOnInit() {
    this.initThree();
  }

  ngAfterViewInit() {
    if (!this.rendererContainer) {
      console.error('rendererContainer is not defined!');
      return;
    }

    this.preloadTextures(); // Wait for textures to be preloaded
    this.loadModel();
    this.addPlane();

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['albumIndex']) {
      this.updateTextures();
    }
  }

  private initThree() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.01, 2000);
    this.camera.position.z = 100;

    if (!this.rendererContainer) {
      console.error('Renderer container is not available!');
      return;
    }

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 25);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1).normalize();
    this.scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    this.scene.add(pointLight);

    const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 1);
    this.scene.add(hemisphereLight);
  }

  private preloadTextures() {
    const textureLoader = new THREE.TextureLoader();
    // Clear existing textures
    this.textures = [];

    // Assuming albumCollection is an array of texture paths
    this.albumCollection.albums.forEach(album => {
      const texture = textureLoader.load(album.image_path);
      this.textures.push(texture);
    });
  }

  private loadModel() {
    this.loader = new GLTFLoader();
    this.loader.load(
      'assets/blender/cd/cd.gltf',
      (gltf) => {
        this.model = gltf.scene;
        this.model.position.set(0, -30, 0);
        this.model.scale.set(25, 25, 25);
        this.scene.add(this.model);

        this.onWindowResize();
        this.animate();
      },
      undefined,
      (error) => {
        console.error('An error happened while loading the model', error);
      }
    );
  }

  private addPlane() {
    if (this.textures.length === 0) {
      console.error('Textures not preloaded!');
      return;
    }

    const planeGeometry1 = new THREE.PlaneGeometry(50, 50);
    const planeMaterial1 = new THREE.MeshBasicMaterial({ map: this.textures[0], side: THREE.DoubleSide });
    const plane1 = new THREE.Mesh(planeGeometry1, planeMaterial1);
    plane1.rotation.y = Math.PI / 3.23;
    plane1.position.set(15.7, -4, 19.5);

    const planeGeometry2 = new THREE.PlaneGeometry(50, 50);
    const planeMaterial2 = new THREE.MeshBasicMaterial({ map: this.textures[0], side: THREE.DoubleSide });
    const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.y = Math.PI / -2;
    plane2.position.set(-4.05, -4, 14);

    this.planeGroup = new THREE.Group();
    this.planeGroup.add(plane1);
    this.planeGroup.add(plane2);

    if (this.model) {
      this.model.add(this.planeGroup);
    } else {
      this.scene.add(this.planeGroup);
    }

    this.onWindowResize();
    this.renderer.render(this.scene, this.camera);
  }


  private updateTextures() {
    if (this.renderer?.render && this.planeGroup) {
      this.planeGroup.children.forEach((plane: any) => {
        if (plane.material && plane.material.map) {
          if (this.textures[this.albumIndex]) {
            plane.material.map = this.textures[this.albumIndex];
            plane.material.needsUpdate = true;
          }
        }
      });

      this.renderer.render(this.scene, this.camera);
    }
  }


  private animate() {
    if (!this.renderer) {
      console.error('Renderer is not initialized during animation!');
      return;
    }

    requestAnimationFrame(() => this.animate());

    if (this.model) {
      this.model.rotation.y -= 0.01;
    }

    if (this.planeGroup) {
      this.planeGroup.rotation.y -= 0.01;
    }

    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.onWindowResize();
  }

  private onWindowResize() {
    if (!this.renderer || !this.camera) {
      console.error('Renderer or camera not initialized during resize!');
      return;
    }

    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);

    this.renderer.render(this.scene, this.camera);
  }
}