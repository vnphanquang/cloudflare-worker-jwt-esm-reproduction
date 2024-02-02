import { sign } from '@tsndr/cloudflare-worker-jwt'

/**
 * @typedef {{}} Env
 */

export default {
	/**
	 * 
	 * @param {Request} request 
	 * @param {Env} env 
	 * @param {ExecutionContext} ctx 
	 * @returns {Promise<Response>}
	 */
	async fetch(request, env, ctx) {
		try {
			const payload = { sub: 'user-id' }
			const secret = 'super_secret_secret'

			const token = await sign(payload, secret)

			return Response.json({ token })
		} catch(err) {
			return new Response((err).stack, { status: 500 })
		}
	}
}