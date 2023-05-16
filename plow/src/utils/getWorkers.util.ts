import api from '@/axios';
import type { IWorkerInfo } from '@/models/worker.model';
import { DecideTree } from '@/services/decideTree.service';

export async function getNodeWorkers(node: number): Promise<Array<IWorkerInfo>> {
	if (!node) {
		return [];
	}

	const dt = new DecideTree();

	let workers = await api
		.get(`/getNodeUsers/${node}`)
		.then((res) => res.data);
	const roles = await api.get('/getAllUserRoles').then((res) => res.data);

	workers = await Promise.all(
		workers.map(async (el: IWorkerInfo) => {
			const tasks = await api
				.get(`/getUserTasks/${el.PhysKey}?nodeKey=${node}`)
				.then((res) => res.data);
			const times = await api
				.get(`/getTimetrack/${el.RoleKey}`)
				.then((res) => res.data);
			const timesLength = times?.length;
			const avgTime =
				times?.reduce((acc, val) => (acc = acc + val.Time), 0) / timesLength;

			return {
				...el,
				tasks,
				avgTime: dt.getAvgTimeValue(avgTime),
				role: roles.find((roleItem) => roleItem.RoleKey === el.RoleKey)
					?.Role_Name,
			};
		})
	);

	return workers;
}