import fs from 'fs';
import path from 'path';
import { func } from 'prop-types';
import { read, write } from './file';

const updatesDirectory = path.join(process.cwd(), 'updates')

export interface Update {
  id: string,
  rows: Item[],
}

export interface Item {
  availability: string
  itemCode: string
  supplierCode: string
  brand: string
  description: string
  minimumOrderQuantity: string
  costPrice: string
  recommendedRetailPrice: string
  margin: string
  image: string
  campaign: string
  comments: string
}

export interface ItemRaw {
  "Availability"?: string
  "HSW Code"?: string
  "Supplier Code"?: string
  "Brand"?: string
  "Description"?: string
  "MOQ"?: string
  "Cost Price"?: string
  "RRP"?: string
  "Margin"?: string
  "Image"?: string
  "Campaign"?: string
  "Comments"?: string
}

function getUpdateFileNames() {
  return fs.readdirSync(updatesDirectory).filter( (value) => { return (/\.csv$/).test(value) } )
}

export function getUpdateIDs(): { params: { id: string } }[] {
  const fileNames = getUpdateFileNames();
  
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.csv$/, '')
      }
    }
  })
}

function processItems(data: ItemRaw[]): Item[] {
  const rows = [];

  for (const row of data) {
    const item: Item = {
      availability: row["Availability"] || "Unknown",
      itemCode: row["HSW Code"] || "Unknown",
      supplierCode: row["Supplier Code"] || "Unknown",
      brand: row["Brand"] || "Unknown",
      description: row["Description"] || "Unknown",
      minimumOrderQuantity: row["MOQ"] || "Unknown",
      costPrice: row["Cost Price"] || "Unknown",
      recommendedRetailPrice: row["RRP"] || "Unknown",
      margin: row["Margin"] || "Unknown",
      image: row["Image"] || "Unknown",
      campaign: row["Campaign"] || "Unknown",
      comments: row["Comments"] || "Unknown",
    };
    rows.push(item);
  }

  return rows;
}
  
export async function getUpdate(id: string): Promise<Update> {
  const fullPath = path.join(updatesDirectory, id);
  const data = await read<ItemRaw[]>(fullPath, 'csv');
  // const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const rows = processItems(data);

  // Combine the data with the id and contentHtml
  return <Update> {
    id,
    rows,
  }
}