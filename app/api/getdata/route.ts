

/**
 * @swagger
 * /api/getdata:
 *   get:
 *     description: Get data from back
 *     responses:
 *       200:
 *         description: Success
 */
export async function GET(request: Request) {
  console.log(request);
  
  return Response.json({test: 'success'})
};