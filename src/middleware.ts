import { defineMiddleware } from 'astro/middleware'

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    return await next()
  } catch (e) {
    // Handle 404 errors
    if (e instanceof Error && e.message.includes('Http Status 404')) {
      return new Response(null, {
        status: 404,
        statusText: 'Not found',
      })
    }

    throw e
  }
})
