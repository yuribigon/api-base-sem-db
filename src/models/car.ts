import {v4 as uuidv4} from 'uuid';

export class Car {
    private uuid: string;

    constructor(
        private brand: string,
        private model: string,
        private year: number,
        private color: string
    ){
        this.uuid = uuidv4();
    }

    getUuid(): string{
        return this.uuid
    }

    getBrand(): string {
        return this.brand
    }

    getModel(): string {
        return this.model
    }
    getYear(): number {
        return this.year
    }
    getColor(): string {
        return this.color
    }

    updateCar(
        brand: string,
        model: string,
        year: number,
        color: string
    ): void {
        this.brand = brand
        this.model = model
        this.year = year
        this.color = color
    }
}

