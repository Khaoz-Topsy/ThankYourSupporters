import { lowercaseFirstLetter } from "./stringHelper";
import { anyObject } from "./typescriptHacks";

export const readFileAsync = (file: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsText(file);
    })
}

export const readImageFileAsync = (file: any): Promise<{ width: number, height: number }> => {
    const url = URL.createObjectURL(file);

    return new Promise((resolve, reject) => {
        const img = new Image;

        img.onload = () => {
            resolve({
                width: img.width,
                height: img.height,
            });
        };

        img.src = url;
    })
}

export const readCsvFileAsync = async <T>(file: any): Promise<Array<T>> => {
    const fileContent = await readFileAsync(file);
    const [headingRow, ...rows] = fileContent.split('\n');
    const headings = headingRow.split(',');

    const allItems = [];
    for (const rowString of rows) {
        if (rowString.length < 5) continue;

        const rowProps = rowString.split(',');
        const item = anyObject;
        for (let headingIndex = 0; headingIndex < headings.length; headingIndex++) {
            const heading = headings[headingIndex];
            const saferPropName = heading
                .replaceAll(' ', '')
                .replaceAll('(months)', '')
                .replaceAll('(', '')
                .replaceAll(')', '')
                .trim();
            const value = rowProps[headingIndex].replaceAll('＇', '\'');
            item[lowercaseFirstLetter(saferPropName)] = value;
        }
        allItems.push({ ...item });
    }

    return allItems;
}