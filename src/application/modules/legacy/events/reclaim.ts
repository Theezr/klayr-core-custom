/*
 * Copyright © 2022 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */
import {
	BaseEvent,
	EventQueuer,
} from '../../../../../node_modules/lisk-framework/dist-node/modules/base_event';

import { NUM_BYTES_LEGACY_ADDRESS, NUM_BYTES_ADDRESS } from '../constants';

export interface reclaimEventData {
	legacyAddress: Buffer;
	address: Buffer;
	amount: bigint;
}

export const accountReclaimedEventDataSchema = {
	$id: 'lisk/legacy/accountReclaimedEventData',
	type: 'object',
	required: ['legacyAddress', 'address', 'amount'],
	properties: {
		legacyAddress: {
			dataType: 'bytes',
			maxLength: NUM_BYTES_LEGACY_ADDRESS,
			fieldNumber: 1,
		},
		address: {
			dataType: 'bytes',
			maxLength: NUM_BYTES_ADDRESS,
			fieldNumber: 2,
		},
		amount: {
			dataType: 'uint64',
			fieldNumber: 3,
		},
	},
};

export class ReclaimEvent extends BaseEvent<reclaimEventData> {
	public schema = accountReclaimedEventDataSchema;

	public log(ctx: EventQueuer, data: reclaimEventData): void {
		this.add(ctx, data, [data.legacyAddress, data.address]);
	}
}
