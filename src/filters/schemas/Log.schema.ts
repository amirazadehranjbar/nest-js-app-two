import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export enum LogType {
    Error = "error",
}

@Schema()
export class LogFilter {
    @Prop()
    content:string;

    @Prop()
    type:LogType;

}

export const LogFilterSchema = SchemaFactory.createForClass(LogFilter);