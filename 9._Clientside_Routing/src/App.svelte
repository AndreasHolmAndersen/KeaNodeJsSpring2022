<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./pages/Home/Home.svelte";
	import About from "./pages/About/About.svelte";

</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
	</nav>

	<div>
		<Route path="/" component={Home}>
			<Home/>
		</Route>

		<Route path="/about" component={About}>
			<About/>
		</Route>
	</div>
</Router>
