import { selectBestOrCustomer } from '../controllers/customerController';
import { Client } from 'pg';
import { sqlCustomer } from '../sql_statemantes/customer';

jest.mock('pg');

describe('selectBestOrCustomer', () => {
  it('should call Client.query with the correct SQL statement', async () => {
    // Mock response for Client.query
    const mockResponse = {
      rows: [
        { C_CUSTKEY: 1, C_NAME: 'Best Customer' },
      ],
    };

    // Mock query function for Client
    (Client.prototype.query as jest.Mock).mockImplementationOnce((query, callback) => {
      // Simulate the behavior of the query callback
      callback(null, mockResponse);
    });

    // Mock request and response objects
    const req: any = {
      query: { numbers: 5 }, // Assuming you need to provide some query parameters
    };
    const res: any = {
      status: jest.fn(() => res), // Ensure res object is returned for method chaining
      json: jest.fn(),
    };

    // Call the function
    await selectBestOrCustomer(req, res);

    // Assertions
    expect(Client.prototype.query).toHaveBeenCalledWith(
      expect.stringContaining(sqlCustomer.selectBestOrCustomer(5)),
      expect.any(Function)
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockResponse.rows);
  });
});
