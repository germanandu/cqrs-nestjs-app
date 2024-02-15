import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCustomerQuery } from '../impl/get-customer.query';
import { CustomerRepository } from '../../repository/customer.repository';

@QueryHandler(GetCustomerQuery)
export class GetCustomersHandler implements IQueryHandler<GetCustomerQuery> {
  constructor(private readonly repository: CustomerRepository) {}

  async execute(query: GetCustomerQuery) {
    console.log('Async GetCustomerQuery...');
    return this.repository.findAll();
  }
}
