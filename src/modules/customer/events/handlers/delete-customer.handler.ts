import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { DeletedCustomerEvent } from "../impl/deleted-customer.event";

@EventsHandler(DeletedCustomerEvent)
export class DeletedCustomerHandler
  implements IEventHandler<DeletedCustomerEvent> {
  handle(event: DeletedCustomerEvent) {
    console.log('DeletedCustommerEvent...');
  }
}