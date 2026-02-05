import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MediaController::page
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
export const page = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(options),
    method: 'get',
})

page.definition = {
    methods: ["get","head"],
    url: '/halaman-cms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::page
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
page.url = (options?: RouteQueryOptions) => {
    return page.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::page
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
page.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::page
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
page.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::page
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
    const pageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: page.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::page
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
        pageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: page.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::page
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
        pageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: page.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    page.form = pageForm
const cms = {
    page: Object.assign(page, page),
}

export default cms