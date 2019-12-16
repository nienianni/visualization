<template>
	<Card :bordered="false" dis-hover>
		<Alert>
			描述标题
			<template slot="desc">描述内容 描述内容 描述内容 描述内容 描述内容 描述内容</template>
		</Alert>
		<Alert type="success">
			描述标题
			<template slot="desc">描述内容 描述内容 描述内容 描述内容 描述内容 描述内容</template>
		</Alert>
		<Alert type="warning">
			描述标题
			<template slot="desc">
				描述内容 描述内容 描述内容 描述内容 描述内容 描述内容
			</template>
		</Alert>
		<Alert type="error">
			描述标题
			<span slot="desc">
				描述内容 描述内容 描述内容 描述内容 描述内容 描述内容
			</span>
		</Alert>
	</Card>
</template>
<script>
export default {};
</script>