// Each /api/<action> endpoint is served by this Vercel Function.
import studyHandler from './core.mjs';
export function GET(request) { return studyHandler(request); }
export function POST(request) { return studyHandler(request); }
