import * as DisneyPlus from '$lib/templates/disney-plus.template';
import * as Netflix from '$lib/templates/netflix.template';
import * as HboMax from '$lib/templates/hbo-max.template';
import { DOMAIN_CHECK, SELF_INVOKING_FUNCTION } from '$lib/templates/utils.template';
import { INIT_LOADER, REMOVE_LOADER } from '$lib/templates/loader.template';

export const RANDOM_EPISODE_BOOKMARKLET = `javascript:${encodeURI(
	SELF_INVOKING_FUNCTION(
		DOMAIN_CHECK(
			`${INIT_LOADER}
        ${DisneyPlus.PICK_RANDOM_EPISODE(REMOVE_LOADER)}`,
			`${INIT_LOADER}
        ${Netflix.PICK_RANDOM_EPISODE(REMOVE_LOADER)}`,
			`${INIT_LOADER}
        ${HboMax.PICK_RANDOM_EPISODE(REMOVE_LOADER)}`
		)
	)
)}`;

export const ANOTHER_RANDOM_EPISODE_BOOKMARKLET = `javascript:${encodeURI(
	SELF_INVOKING_FUNCTION(
		DOMAIN_CHECK(
			DisneyPlus.PICK_ANOTHER_RANDOM_EPISODE(INIT_LOADER, REMOVE_LOADER),
			Netflix.PICK_ANOTHER_RANDOM_EPISODE(INIT_LOADER, REMOVE_LOADER),
			HboMax.PICK_ANOTHER_RANDOM_EPISODE(INIT_LOADER, REMOVE_LOADER)
		)
	)
)}`;
