deployTargets = [:]
deployTargets['ext'] = 's3'

slackConfig = [:]
slackConfig['channel'] = '#deploy-front'

env.SKIP_TESTS = true
env.APP_NAME = 'bolt'

pismoPipeline(deployTargets, slackConfig, 'frontend')
