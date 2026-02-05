import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:29
 * @route '/upload-media'
 */
export const media = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: media.url(options),
    method: 'post',
})

media.definition = {
    methods: ["post"],
    url: '/upload-media',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:29
 * @route '/upload-media'
 */
media.url = (options?: RouteQueryOptions) => {
    return media.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:29
 * @route '/upload-media'
 */
media.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: media.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:29
 * @route '/upload-media'
 */
    const mediaForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: media.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:29
 * @route '/upload-media'
 */
        mediaForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: media.url(options),
            method: 'post',
        })
    
    media.form = mediaForm
const upload = {
    media: Object.assign(media, media),
}

export default upload