import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CustomDialogComponent } from './custom-dialog.component';
import { OverlayRef } from '@angular/cdk/overlay';

export class DialogOverlayRef {

    constructor(private overlayRef: OverlayRef) { }

    close(): void {
        this.overlayRef.dispose();
    }
}



const DEFAULT_CONFIG: DialogConfig = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel'
};


@Injectable()
export class CustomDialogService {
    // Inject overlay service
    constructor(private overlay: Overlay) { }

    open(config: DialogConfig = {}) {
        // Override default configuration
        const dialogConfig = { ...DEFAULT_CONFIG, ...config };

        // Returns an OverlayRef which is a PortalHost
        const overlayRef = this.createOverlay(dialogConfig);

        // Instantiate remote control
        const dialogRef = new DialogOverlayRef(overlayRef);

        // Create ComponentPortal that can be attached to a PortalHost
        const filePreviewPortal = new ComponentPortal(CustomDialogComponent);

        // Attach ComponentPortal to PortalHost
        overlayRef.attach(filePreviewPortal);

        return dialogRef;
    }

    private createOverlay(config: DialogConfig) {
        // Returns an OverlayConfig
        const overlayConfig = this.getOverlayConfig(config);

        // Returns an OverlayRef
        return this.overlay.create(overlayConfig);
    }

    private getOverlayConfig(config: DialogConfig): OverlayConfig {
        const positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();

        const overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });

        return overlayConfig;
    }
}


interface DialogConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
}
