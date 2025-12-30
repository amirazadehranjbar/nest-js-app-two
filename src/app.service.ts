import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {LogFilter} from "./filters/schemas/Log.schema";

@Injectable()
export class AppService {

    constructor(@InjectModel(LogFilter.name) private readonly logModel: Model<LogFilter>) {
    }

}
