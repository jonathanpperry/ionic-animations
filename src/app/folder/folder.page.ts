import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AnimationController, Animation } from "@ionic/angular";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit, AfterViewInit {
  public folder: string;
  anim: Animation;
  @ViewChild("square", { static: false }) square: ElementRef;
  isPlaying = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngAfterViewInit() {
    this.anim = this.animationCtrl.create("myanim");
    this.anim
      .addElement(this.square.nativeElement)
      .duration(1500)
      .easing("ease-out")
      .iterations(Infinity)
      .fromTo("transform", "translateX(0px)", "translate(300px")
      .fromTo("opacity", 1, 0.2);
  }

  toggleAnimation() {
    if (this.isPlaying) {
      this.anim.pause();
    } else {
      this.anim.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}
