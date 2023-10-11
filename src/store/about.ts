import { Store } from '../core/heropy';

interface State {
	photo: string;
	name: string;
	email: string;
	blog: string;
	github: string;
	repository: string;
}

export default new Store<State>({
	photo: 'https://heropy.blog/css/images/logo.png',
	name: 'RINGO / KIM',
	email: 'ringo6739@gmail.com',
	blog: 'https://github.com/kimrihan',
	github: 'https://github.com/kimrihan',
	repository: 'https://github.com/kimrihan',
});
