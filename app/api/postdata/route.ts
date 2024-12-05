

/**
 * @swagger
 * /api/postdata:
 *   post:
 *     description: Saves posted data on backend
 *     operationId: postdata
 *     summary: Save data
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/postData'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/postDataResponse'
 */
export async function POST(request: Request): Promise<Response> {
    const data = await request.json();
    // Process data below

    // Send response below (now it sends back the request)
    const result = {'status': 'success', 'request': data}
    
    return Response.json(result)
};

export async function GET(request: Request): Promise<Response> {
  // Process data below

  // Send response below (now it sends back the request)
  const result = {'status': 'success'}
  
  return Response.json(result)
};