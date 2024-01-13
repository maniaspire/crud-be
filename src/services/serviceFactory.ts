import * as services from './user.service';

class ServiceFactory {
    private static instance: { [key: string]: any } = {}

    public getService<T>(className: any): T {
        if (ServiceFactory.instance[className]) {
            return ServiceFactory.instance[className];
        }
        
        const availableServices = services as { [key: string]: any };

        if (availableServices[className]) {
            ServiceFactory.instance[className] = new availableServices[className];
            return ServiceFactory.instance[className];
        }

        throw Error('Service Not Found')
    }
}

export default (new ServiceFactory())