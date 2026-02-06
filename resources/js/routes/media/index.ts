import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:162
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
 * @see app/Http/Controllers/MediaController.php:162
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
 * @see app/Http/Controllers/MediaController.php:162
 * @route '/media/{id}/play'
 */
play.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: play.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:162
 * @route '/media/{id}/play'
 */
    const playForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: play.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:162
 * @route '/media/{id}/play'
 */
        playForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: play.url(args, options),
            method: 'post',
        })
    
    play.form = playForm
/**
* @see \App\Http\Controllers\MediaController::edit
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/media/{id}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::edit
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
edit.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::edit
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::edit
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::edit
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
    const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::edit
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
        editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::edit
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
        editForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\MediaController::update_content
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}/update'
 */
export const update_content = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_content.url(args, options),
    method: 'post',
})

update_content.definition = {
    methods: ["post"],
    url: '/media/{id}/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::update_content
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}/update'
 */
update_content.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update_content.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::update_content
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}/update'
 */
update_content.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_content.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::update_content
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}/update'
 */
    const update_contentForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update_content.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::update_content
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}/update'
 */
        update_contentForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update_content.url(args, options),
            method: 'post',
        })
    
    update_content.form = update_contentForm
/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
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
 * @see app/Http/Controllers/MediaController.php:99
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
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
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
 * @see app/Http/Controllers/MediaController.php:99
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
 * @see app/Http/Controllers/MediaController.php:206
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
 * @see app/Http/Controllers/MediaController.php:206
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
 * @see app/Http/Controllers/MediaController.php:206
 * @route '/media/{id}'
 */
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MediaController::deleteMethod
 * @see app/Http/Controllers/MediaController.php:206
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
 * @see app/Http/Controllers/MediaController.php:206
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
/**
* @see \App\Http\Controllers\MediaController::reject
 * @see app/Http/Controllers/MediaController.php:196
 * @route '/media/reject/{id}'
 */
export const reject = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/media/reject/{id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::reject
 * @see app/Http/Controllers/MediaController.php:196
 * @route '/media/reject/{id}'
 */
reject.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return reject.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::reject
 * @see app/Http/Controllers/MediaController.php:196
 * @route '/media/reject/{id}'
 */
reject.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::reject
 * @see app/Http/Controllers/MediaController.php:196
 * @route '/media/reject/{id}'
 */
    const rejectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reject.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::reject
 * @see app/Http/Controllers/MediaController.php:196
 * @route '/media/reject/{id}'
 */
        rejectForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reject.url(args, options),
            method: 'post',
        })
    
    reject.form = rejectForm
/**
* @see \App\Http\Controllers\MediaController::approve_play
 * @see app/Http/Controllers/MediaController.php:175
 * @route '/media/approve-play/{id}'
 */
export const approve_play = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve_play.url(args, options),
    method: 'post',
})

approve_play.definition = {
    methods: ["post"],
    url: '/media/approve-play/{id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::approve_play
 * @see app/Http/Controllers/MediaController.php:175
 * @route '/media/approve-play/{id}'
 */
approve_play.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return approve_play.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::approve_play
 * @see app/Http/Controllers/MediaController.php:175
 * @route '/media/approve-play/{id}'
 */
approve_play.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve_play.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::approve_play
 * @see app/Http/Controllers/MediaController.php:175
 * @route '/media/approve-play/{id}'
 */
    const approve_playForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve_play.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::approve_play
 * @see app/Http/Controllers/MediaController.php:175
 * @route '/media/approve-play/{id}'
 */
        approve_playForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve_play.url(args, options),
            method: 'post',
        })
    
    approve_play.form = approve_playForm
const media = {
    play: Object.assign(play, play),
edit: Object.assign(edit, edit),
update_content: Object.assign(update_content, update_content),
update: Object.assign(update, update),
delete: Object.assign(deleteMethod, deleteMethod),
reject: Object.assign(reject, reject),
approve_play: Object.assign(approve_play, approve_play),
}

export default media