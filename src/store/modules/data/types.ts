import { UserModel } from '@/models/User';

interface DataState {
    users: UserModel[];
}

const state: DataState = {
    users: []
};

export default state;
export { DataState };
