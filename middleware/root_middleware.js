import createLogger from 'redux-logger';
import { applyMiddleware } from 'redux';
import WordMiddleware from './word_middleware';

const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(WordMiddleware, loggerMiddleware);

export default RootMiddleware;
