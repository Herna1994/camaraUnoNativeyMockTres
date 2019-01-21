import { Camera } from '@ionic-native/camera';

export interface CameraOptions {
    /** Picture quality in range 0-100. Default is 50 */
    quality?: number;
    /**
     * Choose the format of the return value.
     * Defined in Camera.DestinationType. Default is FILE_URI.
     *      DATA_URL : 0,   Return image as base64-encoded string,
     *      FILE_URI : 1,   Return image file URI,
     *      NATIVE_URI : 2  Return image native URI
     *          (e.g., assets-library:// on iOS or content:// on Android)
     */
    destinationType?: number;
    /**
     * Set the source of the picture.
     * Defined in Camera.PictureSourceType. Default is CAMERA.
     *      PHOTOLIBRARY : 0,
     *      CAMERA : 1,
     *      SAVEDPHOTOALBUM : 2
     */
    sourceType?: number;
    /** Allow simple editing of image before selection. */
    allowEdit?: boolean;
    /**
     * Choose the returned image file's encoding.
     * Defined in Camera.EncodingType. Default is JPEG
     *      JPEG : 0    Return JPEG encoded image
     *      PNG : 1     Return PNG encoded image
     */
    encodingType?: number;
    /**
     * Width in pixels to scale image. Must be used with targetHeight.
     * Aspect ratio remains constant.
    */
    targetWidth?: number;
    /**
     * Height in pixels to scale image. Must be used with targetWidth.
     * Aspect ratio remains constant.
     */
    targetHeight?: number;
    /**
     * Set the type of media to select from. Only works when PictureSourceType
     * is PHOTOLIBRARY or SAVEDPHOTOALBUM. Defined in Camera.MediaType
     *      PICTURE: 0      allow selection of still pictures only. DEFAULT.
     *          Will return format specified via DestinationType
     *      VIDEO: 1        allow selection of video only, WILL ALWAYS RETURN FILE_URI
     *      ALLMEDIA : 2    allow selection from all media types
     */
    mediaType?: number;
    /** Rotate the image to correct for the orientation of the device during capture. */
    correctOrientation?: boolean;
    /** Save the image to the photo album on the device after capture. */
    saveToPhotoAlbum?: boolean;
    /**
     * Choose the camera to use (front- or back-facing).
     * Defined in Camera.Direction. Default is BACK.
     *      BACK: 0
     *      FRONT: 1
     */
    cameraDirection?: number;
    /** iOS-only options that specify popover location in iPad. Defined in CameraPopoverOptions. */
    popoverOptions?: CameraPopoverOptions;
}
/**
 * iOS-only parameters that specify the anchor element location and arrow direction
 * of the popover when selecting images from an iPad's library or album.
 */
export interface CameraPopoverOptions {
    x: number;
    y: number;
    width: number;
    height: number;
    /**
     * Direction the arrow on the popover should point. Defined in Camera.PopoverArrowDirection
     * Matches iOS UIPopoverArrowDirection constants.
     *      ARROW_UP : 1,
     *      ARROW_DOWN : 2,
     *      ARROW_LEFT : 4,
     *      ARROW_RIGHT : 8,
     *      ARROW_ANY : 15
     */
    arrowDir: number;
}


export class CameraMock extends Camera {
    DestinationType: {
        DATA_URL: number;
        FILE_URI: number;
        NATIVE_URI: number;
    };
    /**
     * Convenience constant
     */
    EncodingType: {
        JPEG: number;
        PNG: number;
    };
    /**
     * Convenience constant
     */
    MediaType: {
        PICTURE: number;
        VIDEO: number;
        ALLMEDIA: number;
    };
    /**
     * Convenience constant
     */
    PictureSourceType: {
        PHOTOLIBRARY: number;
        CAMERA: number;
        SAVEDPHOTOALBUM: number;
    };
    /**
     * Convenience constant
     */
    PopoverArrowDirection: {
        ARROW_UP: number;
        ARROW_DOWN: number;
        ARROW_LEFT: number;
        ARROW_RIGHT: number;
        ARROW_ANY: number;
    };
    /**
     * Convenience constant
     */
    Direction: {
        BACK: number;
        FRONT: number;
    };
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    getPicture(options?: CameraOptions): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve(this.miPicture);
        });
    }
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    cleanup(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    }
    miPicture="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"
}
