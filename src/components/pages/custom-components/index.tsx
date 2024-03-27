import React from 'react';
import RenderExample from './render-components';
import RefsExample from './refs-components';
import PropsExample from './props-components';
import EventsExample from './event-components';
import Links from './links';
import Anchor, { genAnchorProps } from '../../the-anchor';

const CustomComponentsPage = () => {
	return (
		<section className="p-basic p-custom">
			<h2 className="title">
				<Anchor {...genAnchorProps('custom-components-base')} />
				&nbsp; Base
			</h2>
			<EventsExample />
			<br />
			<br />
			<br />
			<h2 className="title">
				<Anchor {...genAnchorProps('custom-components-props')} />
				&nbsp; Props
			</h2>
			<PropsExample />
			<br />
			<br />
			<br />
			<h2 className="title">
				<Anchor {...genAnchorProps('custom-components-render')} />
				&nbsp; Render functions
			</h2>
			<RenderExample />
			<br />
			<br />
			<br />
			<h2 className="title">
				<Anchor {...genAnchorProps('custom-components-refs')} />
				&nbsp; Refs
			</h2>
			<RefsExample />
			<br />
			<br />
			<br />
			<h2 className="title">
				<Anchor {...genAnchorProps('custom-components-links')} />
				&nbsp; Links
			</h2>
			<Links />
		</section>
	);
};

export default CustomComponentsPage;
