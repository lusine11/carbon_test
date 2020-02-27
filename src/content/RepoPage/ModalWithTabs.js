import React, {useState} from "react";
import {
    Modal,
    Tabs,
    Tab,
    Toggle,
} from "carbon-components-react";

const tabProps = {
    tabs: {
        selected: 0,
        triggerHref: '#',
        role: 'navigation',
    },
    tab: {
        href: '#',
        role: 'presentation',
        tabIndex: 0,
    },
};

const ModalWithTabs = ({size, ...rest}) => {
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(false);
    };

    const openModal = () => {
        setOpen(true);
    };

    return (
        <>
            <button className="bx--btn bx--btn--primary" type="button" onClick={openModal}>Show
                modal
            </button>

            <Modal {...rest} size="xs"
                open={open}
                passiveModal
                onRequestClose={closeModal}

            >
                <Tabs {...tabProps.tabs} aria-label="Tab navigation">
                    <Tab {...tabProps.tab} label="About" className='bx--tabs__nav--hidden'>
                        <div>
                            <Toggle
                                defaultToggled
                                className="some-class"
                                id="toggle-1"
                            />
                            <p>
                                Carbon is IBM’s open-source design system for digital
                                products and experiences. With the IBM Design Language
                                as its foundation, the system consists of working code,
                                design tools and resources, human interface guidelines,
                                and a vibrant community of contributors.
                            </p>

                        </div>
                    </Tab>
                    <Tab {...tabProps.tab} label="Design">
                        <div>
                            Rapidly build beautiful and accessible experiences. The Carbon kit
                            contains all resources you need to get started.
                        </div>
                    </Tab>
                    <Tab {...tabProps.tab} label="Develop">
                        <div>
                            Carbon provides styles and components in Vanilla, React, Angular,
                            and Vue for anyone building on the web.
                        </div>
                    </Tab>
                </Tabs>
            </Modal>
        </>
    );
};

export default ModalWithTabs;
