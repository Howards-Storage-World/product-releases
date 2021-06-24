/* eslint-disable no-async-promise-executor */
import fs from 'fs/promises';
// import path from 'path';

import CSVStringify from "csv-stringify";
import CSVParse from "csv-parse";

interface CSVType {
    stringify: (data: CSVStringify.Input, options?: CSVStringify.Options) => Promise<string>
    parse: <Type> (data: string, options?: CSVParse.Options) => Promise<Type>
}

const CSV: CSVType  = {
    stringify: (data, options = { header: true, quoted_string: true }) => { return new Promise((resolve, reject) => { CSVStringify(data, options, (err, data) => { err ? reject(err) : resolve(data) }) }); },
    parse: (data, options = { columns: true}) => { return new Promise((resolve, reject) => { CSVParse(data, options, (err, data) => { err ? reject(err) : resolve(data) }) }); }
};

export type FileType = "json" | "csv";

export function read<Type>(filename: string, fileType: FileType): Promise<Type> {
    return new Promise(async (resolve, reject) => {
        try {
            const file: string = (await fs.readFile(`${filename}.${fileType}`)).toString();
            let data: Type;
            switch (fileType) {
                case "json": data = JSON.parse(file); break;
                case "csv": data = await CSV.parse<Type>(file); break;
                default:
                    throw(new Error(`${fileType} processing is not implemented yet.`));
            }
            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
}

export function write<Type>(filename: string, content: Type, fileType: FileType): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            let data: string;
            switch (fileType) {
                case "json": data = JSON.stringify(content); break;
                case "csv": data = await CSV.stringify(Array.isArray(content) ? content : [content]); break;
                default:
                    throw(new Error(`${fileType} processing is not implemented yet.`));
            }
            const response = await fs.writeFile(`${filename}.${fileType}`, data);
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
}