import createLogger from 'redux-logger';
import { applyMiddleware } from 'redux';
import DeckMiddleware from './deck_middleware';

const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(DeckMiddleware, loggerMiddleware);

export default RootMiddleware;
