interface UserModel {
    id: number;
    phone: string;
    username: string;
    website: string;
    email: string;
    name: string;
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    };
    address: {
        city: string;
        geo: {
            lat: string;
            lng: string;
        };
        street: string;
        suite: string;
        zipcode: string;
    };
    image?: string;
}

export { UserModel };
