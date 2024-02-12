import { selectAllCustomer } from '../controllers/customerController';
import { Client } from 'pg';
import { sqlCustomer } from '../sql_statemantes/customer';

jest.mock('pg');

describe('selectAllCustomer', () => {
  it('should call Client.query with the correct SQL statement', async () => {
    // Mock response for Client.query
    const mockResponse = {
      rows: [
        { C_CUSTKEY: 1, C_NAME: 'Customer 1' },
        { C_CUSTKEY: 2, C_NAME: 'Customer 2' },
      ],
    };

    // Mock query function for Client
    (Client.prototype.query as jest.Mock).mockImplementationOnce((query, callback) => {
      // Simulate the behavior of the query callback
      callback(null, mockResponse);
    });

    // Mock request and response objects
    const req: any = {};
    const res: any = {
      status: jest.fn(() => res), // Mock the status function to return the res object
      json: jest.fn(),
    };

    // Call the function
    await selectAllCustomer(req, res);

    // Assertions
    expect(Client.prototype.query).toHaveBeenCalledWith(
      expect.stringContaining(sqlCustomer.selectAllCustomers),
      expect.any(Function)
    );
    expect(res.status().json).toHaveBeenCalledWith(mockResponse.rows);
  });
});
