import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import * as $ from "jquery";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  constructor() { }
  pauseOnHover = true;

  assets_januar = [
    ['/assets/img/januar_2015.jpg', 'Bienenkästen im Schnee'],
    ['/assets/img/wabeneinloeten.jpg', 'Waben werden vorbereitet'],
    ['/assets/img/januartag.jpg', 'Januar im Wald'],
    ['/assets/img/januartag2.jpg', 'Januartag bei der Imkerei'],
    ['/assets/img/baumschnitt.jpg', 'Bei der Imkerei werden die Bäume geschnitten'],
    ['/assets/img/geigersbuehl.jpg', 'Großbettlingen im Januar']
  ]
  
  assets_februar = [
    ['/assets/img/jusi_winter.jpg', 'Jusi im Winter'],
    ['/assets/img/weide_winter.jpg', 'Weide im Winter'],
    ['/assets/img/kornellkirsche_winter.jpg', 'Kornellkirsche im Winter'],
    ['/assets/img/huflattich.jpg', 'Huflattich'],
    ['/assets/img/haselnuss_winter.jpg', 'Haselnuss im Winter'],
    ['/assets/img/krokus_winter.jpg', 'Krokus im Winter'],
    ['/assets/img/krokus_winter2.jpg', 'Blühender Krokus im Winter'],
    ['/assets/img/wald_winter.jpg', 'Wald im Winter'],
    ['/assets/img/hoher_wittlingen.jpg', 'Hoher Wittlingen im Schnee']
  ]

  assets_maerz = [
    ['/assets/img/milder_maerz.jpg', 'Milder März'],
    ['/assets/img/auswinterung.jpg', 'Die Auswinterung beginnt'],
    ['/assets/img/anflug.jpg', 'Die Bienen fangen an zu fliegen'],
    ['/assets/img/ende_maerz.jpg', 'Hochbetrieb Ende März'],
    ['/assets/img/teich.jpg', 'Klotz Beute am Teich'],
    ['/assets/img/weide_maerz.jpg', 'Weiden im März']
  ]

  assets_april = [
    ['/assets/img/imkerei.jpg', 'Die Imkerei im April'],
    ['/assets/img/brutwabe_april.jpg', 'Brutwabe im April'],
    ['/assets/img/wabe_april.jpg', 'Baurahmen für Drohnenbrut'],
    ['/assets/img/brut.jpg', 'Verdeckelte  Brut mit etwas Pollen'],
    ['/assets/img/koeniginnen.jpg', 'Brutwabe mit Königinnenzellen'],
    ['/assets/img/wabe_raps.jpg', 'Honigwabe vor Rapsfeld'],
    ['/assets/img/fruehling.jpg', 'Bienenflug im Frühling'],
    ['/assets/img/pollen.jpg', 'Pollen wird gesammelt'],
    ['/assets/img/pause.jpg', 'Mach mal Pause'],
    ['/assets/img/bienenstand.jpg', 'Bienenstand'],
    ['/assets/img/wiese_bienenstand.jpg', 'Die Wiese beim Bienenstand'],
    ['/assets/img/weide_april.jpg', 'Weide im April'],
    ['/assets/img/jusi_april.jpg', 'Es ist Frühling'],
    ['/assets/img/biene_sw.jpg', 'Close up'],
    ['/assets/img/fruehling_teich.jpg', 'Frühling am Teich'],
    ['/assets/img/kirschbaum.jpg', 'Kirschbaumblüte'],
    ['/assets/img/kirschbluete.jpg', 'Kirschblüte'],
    ['/assets/img/apfelbluete.jpg', 'Apfelblüte'],
    ['/assets/img/loewenzahn.jpg', 'Löwenzahn']
  ]

  assets_mai = [
    ['/assets/img/bienen_honigwabe.jpg', 'Bienen auf Honigwabe'],
    ['/assets/img/imkerei_schild.jpg', 'Die Imkerei'],
    ['/assets/img/teilweise_verdeckelt.jpg', 'Wabe teilweise verdeckelt'],
    ['/assets/img/schwarmzellen.jpg', 'Es werden Schwarmzellen gebildet'],
    ['/assets/img/schwarmzellen2.jpg', 'Schwarmzellen ... da kommt Freude auf'],
    ['/assets/img/voelkerwanderung.jpg', 'Völkerwanderung in den Raps'],
    ['/assets/img/wachsschmelze.jpg', 'Sonnenwachsschmelze'],
    ['/assets/img/loewenzahnwiese.jpg', 'Löwenzahnwiese'],
    ['/assets/img/anflug_loewenzahn.jpg', 'Im Anflug'],
    ['/assets/img/biene_loewenzahn.jpg', 'Biene auf Löwenzahn'],
    ['/assets/img/gaensebluemchen.jpg', 'Gänseblümchen'],
    ['/assets/img/rapsfeld.jpg', 'Rapsfeld'],
    ['/assets/img/wiesentracht.jpg', 'Wiesentracht'],
    ['/assets/img/weissdornstrauch.jpg', 'Weißdornstrauch'],
    ['/assets/img/weissdornbluete.jpg', 'Weißdornblüte'],
    ['/assets/img/weinstock.jpg', 'Weinstock']
  ]
  

  ngOnInit(): void {
    let active = 0;
    let buttons = document.getElementsByClassName('carousel-btn');
    let carousels = document.getElementsByClassName('page-carousel');

    Array.from(buttons).forEach(function (button) {
      button.addEventListener('click', function() {
        carousels[active].classList.add('ghost');
        active = Number(button.id);
        carousels[active].classList.remove('ghost');
        });
    });
  }
}