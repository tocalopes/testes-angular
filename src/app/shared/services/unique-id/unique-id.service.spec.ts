import { UniqueIdSevice } from './unique-id.service';


describe(UniqueIdSevice.name, () => {

    let service: UniqueIdSevice = null;

    beforeEach(() => {
        service = new UniqueIdSevice();
    })

    it(`#${UniqueIdSevice.prototype.generateUniqueIdWithPrefix.name} 
    should generate id when called with prefix`,() => {
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue(); //Checa se o tipo é true ou false literal
        expect(id.startsWith('app-')).toBe(true);//Compara se um valor é igual ao outro (endereço de memória)
        expect(id.startsWith('app-')).toBeTruthy;// Objeto true igual a true literal. True do javascript
    });

    it(`#${UniqueIdSevice.prototype.generateUniqueIdWithPrefix.name} 
    should not generate duplicate IDs when called multiple times`, () => {
        const ids = new Set();
        for( let i = 0; i < 50; i++){
            ids.add(service.generateUniqueIdWithPrefix('app'))
        }
        expect(ids.size).toBe(50);
    });

    it(`#${UniqueIdSevice.prototype.getNumberOfGeneratedUniqueIds.name} 
    should return the num of generatedIds when called`, () => {
        service.generateUniqueIdWithPrefix('app');
        service.generateUniqueIdWithPrefix('app');
        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2)
    });

    it(`#${UniqueIdSevice.prototype.generateUniqueIdWithPrefix.name}
        should throw when called with empty`, () => {
            const emptyValue = [null,undefined,'','0','1']
            emptyValue.forEach((ev) => {
                expect(() => service.generateUniqueIdWithPrefix(ev))
                    .withContext(`Empty value: ${ev}`)
                    .toThrow();
            })
    })

})