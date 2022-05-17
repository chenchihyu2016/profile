import $alertify from '@/alerts';

const baseURL = 'https://jsonplaceholder.typicode.com';
const defaultConfig: ConfigModel = {
    headers: { contentType: 'application/json' }
};

interface DataModel {
    [key: string]: string | number | object;
}

interface ConfigModel {
    body?: string;
    headers?: {
        contentType?: string;
    };
    method?: string;
}

class Api {
    get(url: string, params?: DataModel, config?: ConfigModel) {
        return this.requestHandle('GET', url, params, config);
    }

    post(url: string, data: DataModel, config: ConfigModel) {
        return this.requestHandle('POST', url, data, config);
    }

    async requestHandle(
        method: string,
        url: string,
        data?: DataModel,
        config = defaultConfig
    ) {
        if (method === 'GET') {
            if (data) {
                const keys = Object.keys(data);
                url += '?';

                keys.forEach((key, index) => {
                    const ampersand = index === keys.length - 1 ? '' : '&';
                    const current = `${key}=${data[key]}${ampersand}`;

                    url += current;
                });
            }
        } else {
            config.body = JSON.stringify(data);
        }

        try {
            const completeURI = baseURL + url;
            const response = await fetch(completeURI, config);
            const json = await response.json();

            return json;
        } catch (error) {
            const { status } = error as { status: number; message: string };

            switch (status) {
                case 401:
                    $alertify.error('權限不足');
                    break;
                case 500:
                    $alertify.error('伺服器出錯');
                    break;
            }
        }
    }
}

export default new Api();
