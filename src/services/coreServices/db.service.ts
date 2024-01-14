import { Model, UpdateQuery } from "mongoose";

export abstract class DBService {
    find(model: Model<any>, filter: any = {}) {
        return model.find({ ...filter, isActive: true });
    }

    findOne(model: Model<any>, filter: any) {
        return model.findOne(filter);
    }

    save(model: Model<any>, data: any) {
        const newData = new model(data);
        return newData.save();
    }

    findByIdAndUpdate(model: Model<any>, id: string, data: any) {
        return model.findByIdAndUpdate(id, data);
    }

    deleteById(model: Model<any>, id: string) {
        return model.findByIdAndUpdate(id, { isActive: false });
    }
}