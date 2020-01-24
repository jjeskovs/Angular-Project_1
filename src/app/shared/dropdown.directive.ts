import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({   // this is called decorator!!!
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false; // initial value for the menu to be not open
                                              // HostBiding allow us to bind the properties the directive is set on. In this instance we bind this to the CSS class open. 

    @HostListener('click') toggleOpen(){ // event listener is set to watch for the click
        this.isOpen = !this.isOpen; // this line toggles the menu
    }
} 