import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <Section id="examples" title="Examples">
            <menu>
                <TabButton onClick={() => handleClick("components")} isSelected={selectedTopic === 'components'}>Components</TabButton>
                <TabButton onClick={() => handleClick("jsx")} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                <TabButton onClick={() => handleClick("props")} isSelected={selectedTopic === 'props'}>Props</TabButton>
                <TabButton onClick={() => handleClick("state")} isSelected={selectedTopic === 'state'}>State</TabButton>
            </menu>
            {!selectedTopic && <p>Please selected a topic.</p>}
            {selectedTopic &&
                (
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>
                )
            }
        </Section>
    )
}