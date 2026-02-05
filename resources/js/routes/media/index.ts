import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:52
 * @route '/media/{id}/play'
 */
export const play = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: play.url(args, options),
    method: 'post',
})

play.definition = {
    methods: ["post"],
    url: '/media/{id}/play',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:52
 * @route '/media/{id}/play'
 */
play.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return play.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:52
 * @route '/media/{id}/play'
 */
play.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: play.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:52
 * @route '/media/{id}/play'
 */
    const playForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: play.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:52
 * @route '/media/{id}/play'
 */
        playForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: play.url(args, options),
            method: 'post',
        })
    
    play.form = playForm
/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:79
 * @route '/media/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/media/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:79
 * @route '/media/{id}'
 */
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:79
 * @route '/media/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:79
 * @route '/media/{id}'
 */
    const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:79
 * @route '/media/{id}'
 */
        updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\MediaController::deleteMethod
 * @see app/Http/Controllers/MediaController.php:64
 * @route '/media/{id}'
 */
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/media/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MediaController::deleteMethod
 * @see app/Http/Controllers/MediaController.php:64
 * @route '/media/{id}'
 */
deleteMethod.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return deleteMethod.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::deleteMethod
 * @see app/Http/Controllers/MediaController.php:64
 * @route '/media/{id}'
 */
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MediaController::deleteMethod
 * @see app/Http/Controllers/MediaController.php:64
 * @route '/media/{id}'
 */
    const deleteMethodForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteMethod.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::deleteMethod
 * @see app/Http/Controllers/MediaController.php:64
 * @route '/media/{id}'
 */
        deleteMethodForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteMethod.form = deleteMethodForm
const media = {
    play: Object.assign(play, play),
update: Object.assign(update, update),
delete: Object.assign(deleteMethod, deleteMethod),
}

export default media