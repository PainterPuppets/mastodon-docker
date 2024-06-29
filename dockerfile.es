ARG ES_VERSION
# https://github.com/elastic/elasticsearch-docker
FROM elasticsearch:${ES_VERSION}
ARG ES_VERSION

# https://github.com/medcl/elasticsearch-analysis-ik/releases
ENV IK_RELEASE=https://get.infini.cloud/elasticsearch/analysis-ik/${ES_VERSION}
ENV TS_RELEASE=https://get.infini.cloud/elasticsearch/analysis-stconvert/${ES_VERSION}

RUN echo ${ES_VERSION} && echo $IK_RELEASE && echo ${IK_RELEASE} && echo $TS_RELEASE && echo ${TS_RELEASE}
RUN /usr/share/elasticsearch/bin/elasticsearch-plugin install --batch $IK_RELEASE
RUN /usr/share/elasticsearch/bin/elasticsearch-plugin install --batch $TS_RELEASE
