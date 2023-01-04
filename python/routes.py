from aiohttp.web import RouteTableDef, Response

routes = RouteTableDef()

@routes.get('/hello')
async def _hello(_):
    return Response(text='Hello from Python!', content_type='text/plain')

