import { authState } from "../global-types/auth-state";
import { withNextAuth } from "../decorators/with-next-auth";

export const decorators = [withNextAuth];

export const globalTypes = { ...authState };
