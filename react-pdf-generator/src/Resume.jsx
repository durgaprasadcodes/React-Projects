import React from 'react';
import {
    Document,
    Page,
    View,
    Text,
    Image,
    StyleSheet,
    Link,
} from '@react-pdf/renderer';

import python from './assets/python.png';
import globe from './assets/globe.png';
import linkedin from './assets/linkedin.jpg';
import github from './assets/github.png';

export default function Resume() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.heading}>Python World</Text>

                <View style={styles.parts}>

                    {/* Left Section */}

                    <View style={styles.part1}>
                        <Image src={python} style={styles.image} />

                        <Text style={styles.part1Heading}>
                            Python Developer
                        </Text>

                        <View style={styles.linksContainer}>
                            <Link src="https://durgaprasad4289.github.io/PORTFOLIO/">
                                <Image src={globe} style={styles.linkImage} />
                            </Link>

                            <Link src="https://linkedin.com/in/durgaprasadkota/">
                                <Image src={linkedin} style={styles.linkImage} />
                            </Link>

                            <Link src="https://github.com/durgaprasadcodes">
                                <Image src={github} style={styles.linkImage} />
                            </Link>
                        </View>
                    </View>

                    {/* Right Section */}

                    <View style={styles.part2}>

                        <Text style={styles.sectionTitle}>
                            Skills
                        </Text>

                        <Text style={styles.sectionText}>
                            Python, Django, Flask, FastAPI, React.js, JavaScript,
                            HTML, CSS, PostgreSQL, Git, GitHub
                        </Text>

                        <View style={styles.divider} />

                        <Text style={styles.sectionTitle}>
                            Experience
                        </Text>

                        <Text style={styles.sectionText}>
                            Software Developer at XYZ Company.
                            Worked on REST APIs, frontend development,
                            database integration, and deployment.
                        </Text>

                        <View style={styles.divider} />

                        <Text style={styles.sectionTitle}>
                            Education
                        </Text>

                        <Text style={styles.sectionText}>
                            Bachelor's Degree in Computer Science
                        </Text>

                        <View style={styles.divider} />

                        <Text style={styles.sectionTitle}>
                            Projects
                        </Text>

                        <Text style={styles.sectionText}>
                            • AI Resume Builder{"\n"}
                            • PDF Resume Generator{"\n"}
                            • Expense Tracker{"\n"}
                            • Portfolio Website

                        </Text>

                    </View>

                </View>
            </Page>
        </Document>
    );
}


const styles = StyleSheet.create({
    page: {
        backgroundColor: '#f5f5f5',
        padding: 35,
        fontFamily: 'Helvetica',
    },

    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e3a8a',
        textAlign: 'center',
        marginBottom: 25,
        letterSpacing: 1,
    },

    parts: {
        flexDirection: 'row',
        gap: 20,
    },

    /* LEFT SIDE */

    part1: {
        width: '34%',
        backgroundColor: '#1e293b',
        borderRadius: 12,
        paddingVertical: 25,
        paddingHorizontal: 18,
        alignItems: 'center',
    },

    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 18,
    },

    part1Heading: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },

    linksContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 5,
    },

    link: {},

    linkImage: {
        width: 28,
        height: 28,
    },

    /* RIGHT SIDE */

    part2: {
        width: '66%',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 22,
    },

    sectionTitle: {
        fontSize: 17,
        color: '#2563eb',
        fontWeight: 'bold',
        marginBottom: 6,
        marginTop: 10,
    },

    sectionText: {
        fontSize: 12,
        color: '#444',
        lineHeight: 1.7,
        marginBottom: 12,
    },

    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#d1d5db',
        marginVertical: 8,
    },
});