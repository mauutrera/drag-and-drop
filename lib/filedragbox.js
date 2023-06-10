export default class FileDragBox {
    #dragboxElement = null;
    #dataTrasferHelper = null;
    #inputFileElement = null;
    #acceptOnly = null;
    #successCallback = null;

    constructor(selector, config = null) {
        this.#dragboxElement = document.querySelector(selector);
        if (!this.#dragboxElement) throw `The element with the selector \'${selector}\' was not found.`;

        this.#dataTrasferHelper = new DataTransfer();

        if (config?.inputFile && typeof config.inputFile !== 'string') throw 'Invalid inputFile type, a string "selector" is required.';
        if (config?.accept && !Array.isArray(config.accept)) throw 'Invalid accept type, an array is required.';
        if (config?.success && typeof config.success !== 'function') throw 'Invalid success type, a function success() is required.';

        if (config?.inputFile) this.#inputFileElement = document.querySelector(config.inputFile);
        if (!this.#inputFileElement) throw `The element with the selector \'${config.inputFile}\' was not found.`;
        if (this.#inputFileElement.type !== 'file') throw 'Invalid input:type, an input type \'file\' is required.';

        if (config?.accept) this.#acceptOnly = config.accept;
        if (config?.success) this.#successCallback = config.success;

        if (this.#acceptOnly && this.#inputFileElement) this.#inputFileElement.accept = this.#acceptOnly.join();

        this.#init();
    }

    #init() {
        this.#dragboxElement.addEventListener('dragover', (e) => e.preventDefault());
        this.#dragboxElement.addEventListener('drop', (e) => {
            e.preventDefault();
            let hasNewFiles = false;
            [...e.dataTransfer.files].forEach((file) => {
                if (this.#acceptOnly) {
                    if (this.#acceptOnly.includes(file.type)) {
                        this.#dataTrasferHelper.items.add(file);
                        hasNewFiles = true;
                    } else {
                        for (const type of this.#acceptOnly) {
                            const typeRegx = new RegExp(type.replace('/', '\/').replace('*', '.*'));
                            if (typeRegx.test(file.type)) {
                                this.#dataTrasferHelper.items.add(file);
                                hasNewFiles = true;
                                break;
                            }
                        }
                    }
                } else {
                    this.#dataTrasferHelper.items.add(file);
                    hasNewFiles = true;
                }
            });

            if (hasNewFiles) {
                if (this.#successCallback) this.#successCallback(e, this.#dataTrasferHelper.files);

                if (this.#inputFileElement) {
                    this.#inputFileElement.files = this.#dataTrasferHelper.files;
                    this.#inputFileElement.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        });

        this.#inputFileElement?.addEventListener('input', (e) => {
            const files = this.#inputFileElement.files;
            [...files].forEach((file) => {
                this.#dataTrasferHelper.items.add(file);
            });

            if (this.#successCallback) this.#successCallback(e, this.#dataTrasferHelper.files);

            this.#inputFileElement.files = this.#dataTrasferHelper.files;
        });
    }

    clear() {
        this.#dataTrasferHelper.clearData();
        this.#dataTrasferHelper.items.clear();
        if (this.#inputFileElement) this.#inputFileElement.value = '';
    }
}