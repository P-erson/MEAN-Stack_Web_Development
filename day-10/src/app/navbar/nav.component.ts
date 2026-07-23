import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    'selector': 'app-navbar',
    'standalone': true,
    'templateUrl': './nav.component.html',
    'styleUrl': './nav.component.css',
    imports: [RouterLink]
})
export class navbarComponent{}