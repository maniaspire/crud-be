import * as controllers from "./";

class ControllerFactory {
    private static instance: { [key: string]: any } = {}

    public getController<T>(className: any): T {
        if (ControllerFactory.instance[className]) {
            return ControllerFactory.instance[className];
        }
        
        const availableServices = controllers as { [key: string]: any };

        if (availableServices[className]) {
            ControllerFactory.instance[className] = new availableServices[className];
            return ControllerFactory.instance[className];
        }

        throw Error('Service Not Found')
    }
}

export default (new ControllerFactory())