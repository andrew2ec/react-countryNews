'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Routes.jsx');
var Header = require('./components/Header.jsx');
var News = require('./components/News.jsx');

ReactDOM.render(Routes, document.getElementById('switch'));
ReactDOM.render(React.createElement(Header, { title: 'Country News', subtitle: 'Top stories in my country', link1: 'NEWS', link2: 'PHOTOS' }), document.getElementById('switch'));

ReactDOM.render(React.createElement(News, { title: 'Trump\'s Accusers Are Mostly New Yorkers\n', subtitle: 'Alleged Incidents That Happened in New York City', content: ' Donald Trump speaks at the New York State Republican Gala at the Grand Hyatt on April 14, 2016.  \nDonald Trump speaks at the New York State Republican Gala at the Grand Hyatt on April 14, 2016.\nView Full CaptionDNAinfo/Ben Fractenberg\nIn a presidential contest between two New Yorkers, you might have expected a lot of dirt around electorally unpopular aspects of the city: the details of currying favor with Wall Street, billionaires making untaxed billions on Manhattan real estate, that sort of thing. The defining issue over the past month has, in fact, been the accusations from almost a dozen women that GOP nominee Donald Trump harassed, groped, or made unwanted advances to them. And that, too, is a New York story. Of the 12 women who have now alleged that Donald Trump groped, kissed without consent, or made unwanted advances toward them, all but three have solid connections to New York. (Another woman said she was groped by a stranger while protesting at Trump Tower this weekend.) The Trump campaign denies all the accusations.  "The events never happened," Trump told reporters Saturday. "Never. All of these liars will be sued after the election is over."', location: 'New York, NY' }), document.getElementById('article1'));

ReactDOM.render(React.createElement(News, { title: 'Venezuela: Pres. Maduro Opponents Fan Flames of Birther Debate', content: 'A birther debate is heating up in Venezuela as President Nicolas Maduros opponents seek to push the embattled socialist leader from office at any cost. Like the birther controversy surrounding Barack Obama in the U.S., the lack of any evidence hasnt stopped his opponents from speculating. On Tuesday, the opposition-controlled congress began debating Maduros "constitutional situation" in which lawmakers vow to present evidence that hes a dual Colombian citizen and therefore constitutionally ineligible to hold Venezuelas highest office.\n', location: 'Venezuela, Caracas' }), document.getElementById('article2'));
