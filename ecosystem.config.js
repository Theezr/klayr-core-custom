/*
 * LiskHQ/lisk-service
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
 *
 */

module.exports = {
	apps: [
		{
			name: 'lisk-core',
			script: './bin/run',
			args: 'start',
			env: {
				LISK_NETWORK: 'mainnet',
				LISK_API_IPC: 'true',
			},
			pid_file: './pids/lisk-core.pid',
			out_file: './logs/lisk-core.log',
			error_file: './logs/lisk-core.err',
			log_date_format: 'YYYY-MM-DD HH:mm:ss SSS',
		},
	],
	deploy: {
		server: {
			user: 'root', // User name of host
			host: '8.8.8.8', // IP address of host server
			ref: 'origin/release/4.0.0', // Deployment branch - should be set to the latest release branch
			repo: 'https://github.com/LiskHQ/lisk-core.git', // Git repository url
			path: '/root/home/temp_deploy', // Deployment directory in server
			'pre-setup': 'rm -r /root/home/temp_deploy', // Executed before repo cloning
			'post-setup': 'source ~/.bashrc && nvm install && npm ci && npm run build', // Executed after repo cloning
			'post-deploy': 'source ~/.bashrc && pm2 start ecosystem.config.js', // Executed on end of deploy command procedures
		},
		local: {
			user: 'root',
			host: '127.0.0.1',
			ref: 'origin/release/4.0.0',
			repo: 'https://github.com/LiskHQ/lisk-core.git',
			path: '/Users/{USER_NAME}/temp_deploy',
			'pre-setup': 'rm -r /Users/{USER_NAME}/temp_deploy',
			'post-setup': 'source ~/.bashrc && source ~/.zshrc && nvm install && npm ci && npm run build',
			'post-deploy': 'source ~/.bashrc && source ~/.zshrc && pm2 start ecosystem.config.js',
		},
	},
};
