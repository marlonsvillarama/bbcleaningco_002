<script>
	import BBLogo from '$lib/images/busy-bee.svg';
	import LoginImage from '$lib/images/about-us-banner-image.jpg';
	import GalleryVerticalEndIcon from "@lucide/svelte/icons/gallery-vertical-end";
	import LoginForm from "@/components/layouts/login-02/login-form.svelte";
</script>

<div class="grid min-h-svh lg:grid-cols-2">
	<div class="flex flex-col p-6 md:p-10">
		<div class="flex justify-center">
			<a href="https://bbcleaningco.com/" class="flex items-center font-medium" target="_blank">
				<img src={BBLogo} alt="Busy Bee Cleaning Co." />
				<!-- <div
					class="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md"
				>
				</div> -->
				<!-- Acme Inc. -->
			</a>
		</div>
		<div class="flex flex-1 items-center justify-center">
			<div class="w-full max-w-xs">
				<LoginForm />
			</div>
		</div>
	</div>
	<div class="bg-muted relative hidden md:block">
		<img
			src={LoginImage}
			alt="placeholder"
			class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
		/>
	</div>
</div>